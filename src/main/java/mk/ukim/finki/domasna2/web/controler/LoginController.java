package mk.ukim.finki.domasna2.web.controler;

import jakarta.servlet.http.HttpServletRequest;
import mk.ukim.finki.domasna2.model.enumerations.UserStatus;
import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.model.exceptions.InvalidUserCredentialsException;
import mk.ukim.finki.domasna2.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/login")
@Validated
@CrossOrigin(origins="*")
public class LoginController {
    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("")
    public ResponseEntity<Object> login(HttpServletRequest request){
        try{
            User user = this.authService.login(request.getParameter("username"), request.getParameter("password"));
            user.setStatus(UserStatus.LOGGED_IN);
            return ResponseEntity.ok(user); //koga ke se logira korisnikot, vo react treba da se zacuvaat
            // negovite informacii vo SESIJA za da vazi nasekade niz aplikacijata dodeka ne se odlogira!!!!!
            //otkkao ke se logira uspesno treba samo redirect kon stranata so vinariite
        }catch(InvalidUserCredentialsException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());//dokolku stigne poraka togas
            // treba da se ostane na istata strana za login
            // i samo da se ispise porakata t.e tekstot so crveni bukvi ili kako i da e
        }

    }


}
