package mk.ukim.finki.domasna2.repository;

import mk.ukim.finki.domasna2.model.Comment;
import mk.ukim.finki.domasna2.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByWinery(Winery winery);
}
