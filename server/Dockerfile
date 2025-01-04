FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy local code to the container image.
COPY . ./

RUN ./mvnw -DoutputFile=target/mvn-dependency-list.log -B -DskipTests clean dependency:list install

CMD ["sh", "-c", "java -jar target/*.jar"]