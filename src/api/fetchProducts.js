// Mock fetch function to simulate fetching products
function fetchProducts() {
  return new Promise((resolve) => {
    // Simulated product data
    const products = [
      {
        title: "Product 1",
        description: "This is the description for Product 1.",
        price: 50.0,
        discountedPrice: 45.0,
        imageUrl: "../images/watch3.png",
      },
      {
        title: "Product 2",
        description: "This is the description for Product 2.",
        price: 100.0,
        discountedPrice: 90.0,
        imageUrl: "../images/watch2.png",
      },
      {
        title: "Product 3",
        description: "This is the description for Product 3.",
        price: 150.0,
        discountedPrice: 120.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 4",
        description: "This is the description for Product 4.",
        price: 200.0,
        discountedPrice: 180.0,
        imageUrl: "../images/watch2.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
      {
        title: "Product 5",
        description: "This is the description for Product 5.",
        price: 250.0,
        discountedPrice: 225.0,
        imageUrl: "../images/watch1.png",
      },
    ];

    // Resolve the promise with the products data
    setTimeout(() => {
      resolve({
        status: 200,
        json: () => Promise.resolve(products),
      });
    }, 1000); // Simulate network delay
  });
}

// Mock fetch function to simulate fetching products
function fetchProductDesign() {
  return new Promise((resolve) => {
    let design = "default";

    // Resolve the promise with the products data
    setTimeout(() => {
      resolve({
        status: 200,
        json: () => Promise.resolve(design),
      });
    }, 1000); // Simulate network delay
  });
}

// Example usage of the fetchProducts function
export const getProducts = async () => {
  try {
    let productJson = [];
    let productDesign = "default";
    const productsRes = await fetchProducts();
    if (productsRes.status === 200) {
      productJson = await productsRes.json();
      const designRes = await fetchProductDesign();
      if (designRes.status === 200) {
        productDesign = await designRes.json();
        console.log(productDesign);
        console.log(productJson);
      }
    }
    return {
      productJson: productJson,
      productDesign: productDesign,
    };
  } catch (e) {
    console.log(e);
  }
};