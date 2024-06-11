import { Box, Flex, Link, Spacer, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(`/products?search=${e.target.value}`);
  };
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">ElectroShop</Link>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          color="white"
          variant="outline"
          mr={4}
        />
        <Spacer />
        <Button as={RouterLink} to="/products" colorScheme="teal" variant="outline" color="white">Products</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;