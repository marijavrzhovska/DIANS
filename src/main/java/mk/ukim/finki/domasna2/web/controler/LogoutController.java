package mk.ukim.finki.domasna2.web.controler;

import mk.ukim.finki.domasna2.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/logout")
@Validated
@CrossOrigin(origins="*")
public class LogoutController {
    private final AuthService authService;

    public LogoutController(AuthService authService) {
        this.authService = authService;
    }

    //za ova ke se pojavi kopce otkako ke se najavi korisnikot, odnosno ako user!=null
    //koga se logira korisnikot so samoto stavanje na user kako atribut na sesijata,
    // go imame userot sekade niz html-ovite se dodeka ne se odlogira zatoa vo toj moment treba da se izbirse od sesijata
    //ili ako se prekine aplikacijata
    @PostMapping
    public ResponseEntity<String> logout(@RequestParam String username) {
        authService.logout(username);
        return ResponseEntity.ok("Logout successful");
        //vo react se brise userot od sesijata i redirect kon vinariite
    }
}
