import { Box, SimpleGrid, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "$149", image: "https://via.placeholder.com/150" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const query = useQuery();

  useEffect(() => {
    const searchQuery = query.get("search")?.toLowerCase() || "";
    setFilteredProducts(
      sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
      )
    );
  }, [query]);
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={5}>
              <VStack spacing={3}>
                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                <Text>{product.price}</Text>
                <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;