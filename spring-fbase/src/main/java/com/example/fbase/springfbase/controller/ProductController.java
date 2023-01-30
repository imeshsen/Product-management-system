package com.example.fbase.springfbase.controller;

import com.example.fbase.springfbase.entity.Product;
import com.example.fbase.springfbase.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {
    @Autowired
    public ProductService productService;


    @PostMapping("/products")
    public String saveProduct(@RequestBody Product product) throws ExecutionException, InterruptedException {
        return productService.saveProduct(product);
    }

    @GetMapping("/products/{name}")
    public Product getProduct(@PathVariable String name) throws ExecutionException, InterruptedException {
        return productService.getProductDetails(name);
    }

    @PutMapping("/products")
    public String updateProduct(@RequestBody Product product) throws ExecutionException, InterruptedException {
        return productService.updateProduct(product);
    }

    @DeleteMapping("/products/{name}")
    public String deleteProduct(@PathVariable String name) throws ExecutionException, InterruptedException {
        return productService.deleteProduct(name);
    }

    @GetMapping("/products/")
    public List<Product> getAllProduct() throws ExecutionException, InterruptedException {
        return productService.getAllProductDetails();
    }
}
