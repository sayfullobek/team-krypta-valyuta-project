package it.universal.krypta.valyuta.server.payload;

import it.universal.krypta.valyuta.server.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetLogin {
    private User user;
    private ResToken resToken;
}
