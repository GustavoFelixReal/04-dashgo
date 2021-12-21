import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Gustavo Felix</Text>
          <Text color="gray.300" fontSize="small">
            gustavo.felixreal@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Felix"
        src="https://avatars.githubusercontent.com/u/59146039?v=4"
      />
    </Flex>
  )
}
