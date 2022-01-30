FROM maven:3.8.4-openjdk-17 as maven
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM openjdk:17-jdk-alpine
VOLUME /tmp
COPY run.sh .
#ARG JAR_FILE
#COPY ${JAR_FILE} app.jar
#COPY target/*.jar app.jar
COPY --from=maven /usr/src/app/target/*.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]
ENTRYPOINT ["./run.sh"]