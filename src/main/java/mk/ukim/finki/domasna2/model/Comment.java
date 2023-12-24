package mk.ukim.finki.domasna2.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "winery_comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    @Column(length = 700)
    private String comment;

    @ManyToOne
    @JoinColumn(name = "winery_id")
    private Winery winery;

    public Comment(String comment) {
        this.comment = comment;
    }

    public Comment() {

    }
}