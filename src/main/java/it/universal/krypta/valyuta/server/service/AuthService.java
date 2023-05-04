package it.universal.krypta.valyuta.server.service;

import it.universal.krypta.valyuta.server.entity.User;
import it.universal.krypta.valyuta.server.payload.Apiresponse;
import it.universal.krypta.valyuta.server.payload.ReqLogin;
import it.universal.krypta.valyuta.server.repository.RoleRepository;
import it.universal.krypta.valyuta.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService implements UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    public UserDetails loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
        return userRepository.findUserByUsername(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
    }

    public UserDetails getUserById(UUID id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getUser"));
    }

    public Apiresponse change(UUID id, ReqLogin reqLogin) {
        Optional<User> byId = userRepository.findById(id);
        if (byId.isPresent()) {
            User user = byId.get();
            user.setUsername(reqLogin.getUsername());
            user.setPassword(passwordEncoder().encode(reqLogin.getPassword()));
            userRepository.save(user);
            return new Apiresponse("almashtirildi", true);
        }
        return new Apiresponse("bunday user mavjud emas", false);
    }
}
