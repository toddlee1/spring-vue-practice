//package com.okta.springbootvue;
//
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.builder.SpringApplicationBuilder;
//import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
//import org.springframework.context.annotation.Bean;
//import org.springframework.core.Ordered;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//import java.util.Collections;
//import java.util.stream.Stream;
//
//@SpringBootApplication
//public class SpringBootServletApplication extends SpringBootServletInitializer {
//
//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//        return application.sources(SpringBootServletApplication.class);
//    }
//
//    public static void main(String[] args) {
//        SpringApplication.run(SpringBootServletApplication.class, args);
//    }
//
//    @Bean
//    ApplicationRunner init(TodoRepository repository) {
//        return args -> {
//            Stream.of("Buy milk", "Eat Lunch", "Haha", "Study Vue.JS").forEach(name -> {
//                Todo todo = new Todo();
//                todo.setTitle(name);
//                repository.save(todo);
//            });
//            repository.findAll().forEach(System.out::println);
//        };
//    }
//
//    @Bean
//    public FilterRegistrationBean simpleCorsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//
//        config.setAllowedOrigins(Collections.singletonList("http://localhost:8080"));
//        config.setAllowedMethods(Collections.singletonList("*"));
//        config.setAllowedHeaders(Collections.singletonList("*"));
//        source.registerCorsConfiguration("/**", config);
//        FilterRegistrationBean bean = new FilterRegistrationBean<>(new CorsFilter(source));
//        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//        return bean;
//
//    }
//}
