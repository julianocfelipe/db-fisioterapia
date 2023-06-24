import {
  Avatar,
  Box,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react';
import Doctor from '../../domain/entity/doctor.entity';
import React, { useState } from 'react';

interface Props {
  doctor: Doctor;
}

const DoctorAvatar: React.FC<Props> = ({ doctor }) => {
  const [loading, setLoading] = useState(true);
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  const onFinishToLoadImage = () => {
    setLoading(false);
  };

  return (
    <Stat
      minW={600}
      border={useColorModeValue('1px solid #E2E8F0', '1px solid rgba(255,255,255,0.16)')}
      padding={4}
      w="100%"
    >
      <StatLabel>{doctor.name}</StatLabel>
      <StatNumber h="96px" my={2}>
        <Box
          as="div"
          position="absolute"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: 'relative',
            display: loading ? 'block' : 'none',
            width: '300%',
            marginLeft: '-100%',
            marginTop: '-100%',
            height: '300%',
            boxSizing: 'border-box',
            borderRadius: '50%',
            bgColor: color,
            animation: loading ? `1.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite` : '',
          }}
        >
          <Avatar src={doctor.image_directory} size="full" position="absolute" top={0} onLoad={onFinishToLoadImage} />
        </Box>
      </StatNumber>
      <StatHelpText>{doctor.phone}</StatHelpText>
    </Stat>
  );
};

export default DoctorAvatar;
