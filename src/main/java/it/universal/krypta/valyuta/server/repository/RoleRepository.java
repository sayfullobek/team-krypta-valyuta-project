package it.universal.krypta.valyuta.server.repository;

import it.universal.krypta.valyuta.server.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
