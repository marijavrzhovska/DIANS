package mk.ukim.finki.domasna2.web.controler;

import mk.ukim.finki.domasna2.model.exceptions.InvalidArgumentsException;
import mk.ukim.finki.domasna2.model.exceptions.PasswordsDoNotMatchException;
import mk.ukim.finki.domasna2.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
@Validated
@CrossOrigin(origins="*")
public class RegisterController {
    private final AuthService authService;

    public RegisterController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("")
    public ResponseEntity<String> register(@RequestParam String username,
                                           @RequestParam String password,
                                           @RequestParam String repeatPassword,
                                           @RequestParam String name,
                                           @RequestParam String surname) {
        try {
            this.authService.register(username, password, repeatPassword, name, surname);
            return ResponseEntity.ok("Registration successful");
            //korisnikot e registrian i zacuvan vo baza, ne treba ovaa funkcionalnost vo react
            //cim stigne porakata Registration successful samo redirect kon login
        } catch (PasswordsDoNotMatchException | InvalidArgumentsException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }



}
