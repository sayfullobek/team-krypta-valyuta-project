package it.universal.krypta.valyuta.server.repository;

import it.universal.krypta.valyuta.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
public interface UserRepository extends JpaRepository<User, UUID> {
    boolean existsByUsername(String username);

    Optional<User> findUserByUsername(String username);

    List<User> findUsersByRoleId(Integer role_id);
}
