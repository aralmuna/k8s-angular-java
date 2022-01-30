FROM maven:3.8.4-openjdk-17 as maven
COPY ./pom.xml ./pom.xml
RUN mvn dependency:go-offline -B
COPY ./src ./src
RUN mvn package

FROM openjdk:17-jdk-alpine
VOLUME /tmp
COPY --from=maven target/*.jar app.jar
COPY run.sh .
ENTRYPOINT ["./run.sh"]