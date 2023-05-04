package it.universal.krypta.valyuta.server.controller;

import it.universal.krypta.valyuta.server.entity.User;
import it.universal.krypta.valyuta.server.payload.Apiresponse;
import it.universal.krypta.valyuta.server.payload.GetLogin;
import it.universal.krypta.valyuta.server.payload.ReqLogin;
import it.universal.krypta.valyuta.server.payload.ResToken;
import it.universal.krypta.valyuta.server.repository.UserRepository;
import it.universal.krypta.valyuta.server.security.JwtTokenProvider;
import it.universal.krypta.valyuta.server.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final
    AuthService authService;
    private final
    AuthenticationManager authenticationManager;
    private final
    UserRepository authRepository;
    private final
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqLogin request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        User user = authRepository.findUserByUsername(request.getUsername()).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        ResToken resToken = new ResToken(generateToken(request.getUsername()));
        System.out.println(ResponseEntity.ok(getMal(user, resToken)));
        return ResponseEntity.ok(getMal(user, resToken));
    }

    @PutMapping("/{id}")
    public HttpEntity<?> changeAbout(@PathVariable UUID id, @RequestBody ReqLogin reqLogin) {
        Apiresponse change = authService.change(id, reqLogin);
        return ResponseEntity.status(change.isSuccess() ? 200 : 409).body(change);
    }

    private String generateToken(String phoneNumber) {
        User user = authRepository.findUserByUsername(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
        return jwtTokenProvider.generateToken(user.getId());
    }

    public GetLogin getMal(User user, ResToken resToken) {
        return new GetLogin(user, resToken);
    }

    @GetMapping
    public HttpEntity<?> getEmployeList() {
        List<User> all = authRepository.findAll();
        return ResponseEntity.ok(all);
    }
}
