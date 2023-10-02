import React from 'react'
import { Box, Flex, HStack, IconButton, Stack, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { graphql, useStaticQuery, Link } from 'gatsby'
import IconSocial from '../../components/IconSocial'

const NavLink = ({ to, children }) => (
  <div className='transition ease-in-out rounded-md w-full p-0.5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 duration-300'>
    <Link className='text-lg 4xl:text-2xl text-textPrimary border-background m-0 p-1 rounded-md'
    to={`/${to}`}>
    {children}
    </Link>
  </div>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { sanityHeader, sanityFooter } = useStaticQuery(query)

  return (
    <div>
      <Box className='text-textSecondary' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen} 
            />
          <Flex alignItems={'center'}>
            <Box className='text-xl 4xl:text-2xl'>Portfolio</Box>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {sanityHeader.links.map((link) => (
                  <NavLink key={link._key} to={link.slug.current}>{link.label}</NavLink>
                ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box className='flex w-full flex-row gap-5 justify-center'>
              {sanityFooter.socialIcons.map((icon) => (
                <IconSocial key={icon._key} classes='text-textPrimary hover:text-cyan-500 hover:scale-[1.15] 4xl:text-4xl' socialLink={icon.socialLink} icon={icon.icon} size={icon.size} />))}
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: 'none' }}>
            <Stack
              as={'nav'}
              spacing={4}>
              <>
                {sanityHeader.links.map((link) => (
                  <NavLink key={link._key} to={link.slug.current}>{link.label}</NavLink>
                ))}
              </>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  )
}

// const query = graphql`
//   query Header {
//     sanityHeader {
//       links {
//         _key
//         label
//         slug {
//           current
//         }
//       }
//     }
// }
// `

const query = graphql`
  query {
    sanityFooter {
        footer
        socialIcons{
            _key
            socialLink
            size
            icon
        }
    }

    sanityHeader {
      links {
        _key
        label
        slug {
          current
        }
      }
    }
}
`
