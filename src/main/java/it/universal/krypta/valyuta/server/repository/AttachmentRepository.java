package it.universal.krypta.valyuta.server.repository;

import it.universal.krypta.valyuta.server.entity.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4000")
public interface AttachmentRepository extends JpaRepository<Attachment, UUID> {
}
