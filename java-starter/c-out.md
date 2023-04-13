## c:out tag examples

### if
```html
<c:if test = "${number==secretNumber}">
	<p><c:out value="You got it!"/></p>
</c:if>
<c:if test = "${number!=secretNumber}">
	<p><c:out value="Try again."/></p>
</c:if>
```
### choose aka switch
```html
<c:choose>
	<c:when test="${number<secretNumber}">
		<p><c:out value="Your number is too low."/></p>
	</c:when>
	<c:when test="${number>secretNumber}">
		<p><c:out value="Your number is too high."/></p>
	</c:when>
	<c:otherwise>
		<p><c:out value="You got it!"/></p>
	</c:otherwise>
</c:choose>
```