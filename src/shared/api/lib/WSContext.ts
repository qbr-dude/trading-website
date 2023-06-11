import { createContext } from 'react';
import WSConnector from '../config/ws';

export const WSContext = createContext<WSConnector | null>(null);