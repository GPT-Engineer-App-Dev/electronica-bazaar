import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", description: "A powerful laptop for all your computing needs.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for an immersive experience.", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "$149", description: "A smartwatch to keep you connected on the go.", image: "https://via.placeholder.com/150" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Image src={product.image} alt={product.name} />
        <Text fontWeight="bold" fontSize="2xl">{product.name}</Text>
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;