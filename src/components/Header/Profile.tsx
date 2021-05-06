import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Roberto Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            roherool@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Roberto Oliveira" src="https://github.com/roherool.png" />
    </Flex>
  )
}