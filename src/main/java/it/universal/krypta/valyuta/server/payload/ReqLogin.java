package it.universal.krypta.valyuta.server.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqLogin {
    private String username;
    @Pattern(regexp = "^(?:(?=.*?\\p{N})(?=.*?[\\p{S}\\p{P} ])(?=.*?\\p{Lu})(?=.*?\\p{Ll}))[^\\p{C}]{4,16}$", message = "Uzunligi 8-16 oralig'ida. Parolda kamida bitta katta harf, son va belgi b'lishi shart.")
    private String password;
}
