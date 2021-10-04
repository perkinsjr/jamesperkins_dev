import NextLink from 'next/link';
import { chakra } from '@chakra-ui/react';
import * as React from 'react';

const DesktopNavLink = (props) => {
    const { href } = props;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <chakra.a
                    fontSize="lg"
                    fontWeight="semibold"
                    color="primary.400"
                    w="full"
                    _hover={{
                        color: 'primary.200'
                    }}
                    {...props}
                />
            </NextLink>
        );
    }

    return (
        <chakra.a
            target="_blank"
            rel="noopener noreferrer"
            fontSize="lg"
            fontWeight="semibold"
            color="primary.400"
            w="full"
            _hover={{
                color: 'primary.200'
            }}
            {...props}
        />
    );
};

const MobileNavLink = (props) => {
    const { href } = props;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <chakra.a
                    display="block"
                    textAlign="center"
                    fontWeight="bold"
                    py="5"
                    fontSize="lg"
                    color="white"
                    w="full"
                    _hover={{
                        color: 'blackAlpha.200'
                    }}
                    {...props}
                />
            </NextLink>
        );
    }

    return (
        <chakra.a
            target="_blank"
            rel="noopener noreferrer"
            display="block"
            textAlign="center"
            fontWeight="bold"
            py="5"
            fontSize="lg"
            color="white"
            w="full"
            _hover={{
                color: 'blackAlpha.200'
            }}
            {...props}
        />
    );
};

export const NavLink = {
    Mobile: MobileNavLink,
    Desktop: DesktopNavLink
};
