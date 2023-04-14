# snippets needed for various things for eclipse


## Rendering Views w/ JSP

### applications properties
spring.mvc.view.prefix=/WEB-INF/

### pom.xml

<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
</dependency>
<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
</dependency>

### JSP template - needed for every JSP page
```
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
```

## MYSQL connection
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
</dependency>   

#### application properties
spring.datasource.url=jdbc:mysql://localhost:3306/<<YOUR_SCHEMA>>
spring.datasource.username=<<dbuser>>
spring.datasource.password=<<dbpassword>>
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.mvc.hiddenmethod.filter.enabled=true

### Date
```
<%@ page language="java" contentType="text/html charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date"%>
```
### linking CSS /JS
- `src/main/resources/static/css <style.css>`

```html
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>hello world</title>
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
	<h1>Hello world, with some style!</h1>
</body>
</html>
```

## Bootstrap

<dependency>
    <groupId>org.webjars</groupId>
    <artifactId>bootstrap</artifactId>
    <version>5.2.3</version>
</dependency>

```html
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
```

### Thymleaf
<dependency>
    <groupid>org.springframework.boot</groupid>             
    <artifactid>spring-boot-starter-thymeleaf</artifactid>
</dependency>

