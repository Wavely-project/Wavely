'use client';
import useModals from '@/hooks/use-modal-store';
import React, { useEffect, useState } from 'react';
import withPageRequiredAuth from '@/services/auth/with-page-required-auth';
import { socket } from '@/socket';
import { useSocket } from '@/providers/socket-provider';

const page = () => {
  // const [isConnected, setIsConnected] = useState(false);
  // const [transport, setTransport] = useState('N/A');

  // useEffect(() => {
  //   if (socket.connected) {
  //     onConnect();
  //   }

  //   function onConnect() {
  //     setIsConnected(true);
  //     setTransport(socket.io.engine.transport.name);

  //     socket.io.engine.on('upgrade', (transport) => {
  //       setTransport(transport.name);
  //     });
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //     setTransport('N/A');
  //   }

  //   socket.on('events', onConnect);
  //   socket.on('disconnect', onDisconnect);

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //   };
  // }, []);

  // const { onOpen } = useModals();
  return <div> </div>;
};

export default withPageRequiredAuth(page);
