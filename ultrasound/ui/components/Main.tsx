import { Flex, Heading, Image, Link, Spinner, Text, Tooltip } from '@chakra-ui/react';
import { useBurnEvents } from '../hooks/useBurnEvents';
import { BurnSNX } from './BurnSNX';
import { Chart } from './Chart';
import { CurrentSupplyStats } from './CurrentSupplyStats';
import kainSvg from './svgs/kain.svg';
import { SupplyChangeStats } from './SupplyChangeStats';
import { InfoIcon } from '@chakra-ui/icons';

export function Main() {
  const { data: events, isLoading } = useBurnEvents();

  return (
    <Flex flexDir="column" mt="8" width="100%" maxW="1200px">
      <Flex justifyContent="space-between" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
        <Flex flexDir="column">
          <Heading
            fontSize={{ medium: '30px', base: '48px', xl: '72px' }}
            fontWeight={700}
            color="white"
          >
            ultrasound.homes
          </Heading>
          <Heading fontSize="30px" fontWeight={700} color="white">
            burning SNX for Kain&apos;s mansions
          </Heading>
        </Flex>
        <Flex alignItems="center" mt={{ base: 10, xl: 0 }}>
          <Image src={kainSvg} />
          <Flex flexDir="column">
            <Flex alignItems="baseline" gap="2">
              <Text fontSize="16px" fontWeight={700} color="white">
                Mansion counter
              </Text>
              <Tooltip label="Times the BuyBack and Burn contract was triggered">
                <InfoIcon w="10px" h="10px" />
              </Tooltip>
            </Flex>
            <Text fontSize="24px" fontWeight={700} color="white">
              {isLoading ? <Spinner colorScheme="cyan" /> : events?.totalBurns}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="4" mt="4" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
        <Flex alignItems="center" flexDir="column" w={{ base: '100%', xl: 'unset' }}>
          <Chart />
          <Flex
            width={{
              base: '100%',
            }}
            gap="4"
            flexWrap={{ base: 'wrap', xl: 'nowrap' }}
          >
            <SupplyChangeStats />
            <CurrentSupplyStats />
          </Flex>
        </Flex>
        <BurnSNX />
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center">
        <Text fontWeight={700} fontSize="16px">
          Share
        </Text>
        <Link href="https://twitter.com/intent/tweet?text=I%20am%20paying%20for%20Kains%20Mansion">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3050_14040)">
              <path
                d="M25.7124 25.8147L32.4133 33.75H30.8254L25.0071 26.8599L20.3599 33.75H15L22.0274 23.331L15 15.0096H16.588L22.7324 22.2858L27.6401 15.0096H33L25.7121 25.8147H25.7124ZM23.5375 23.2392L22.8255 24.2767L17.1602 32.5322H19.5992L24.1712 25.8697L24.8832 24.8322L30.8262 16.1721H28.3871L23.5375 23.2388V23.2392Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3050_14040">
                <rect
                  width="18"
                  height="18.75"
                  fill="white"
                  transform="matrix(1 0 0 -1 15 33.75)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </Flex>
    </Flex>
  );
}
