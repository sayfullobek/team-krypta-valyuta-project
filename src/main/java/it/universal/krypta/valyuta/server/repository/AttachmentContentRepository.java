package it.universal.krypta.valyuta.server.repository;

import it.universal.krypta.valyuta.server.entity.AttachmentContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4000")
public interface AttachmentContentRepository extends JpaRepository<AttachmentContent, UUID> {
    AttachmentContent findByAttachmentId(UUID attachment_id);
}
