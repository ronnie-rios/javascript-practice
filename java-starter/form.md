```html
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    <%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form:form action="/donations/process/create" method="post" modelAttribute="donation">
		<form:label path="name">donation name</form:label>
		<form:input type="text" path="name"/>
		<form:errors path="name"/>
		<form:label path="quantity">donation quantity</form:label>
		<form:input type="number" path="quantity"/>
		<form:label path="donor">donation donor</form:label>
		<form:input type="text" path="donor"/>
		<input type="submit" value="Add Donation"/>
	</form:form>
</body>
</html>
```