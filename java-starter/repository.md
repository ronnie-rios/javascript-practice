```java
@Repository
public interface ThingRepository extends CrudRepository<Thing, Long>{
    //finds all
    List<Thing> findAll();
    // find by description record
    List<Thing> findByDescriptionContaining(String search);
    // how many exist
    Long countByTitleContaining(String search);
    // delete
    Long deleteByTitleStartingWith(String search);
}

```