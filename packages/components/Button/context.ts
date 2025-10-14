import { createContext } from 'react';
import type { ButtonGroupContext } from './types.buttonGroup';

const ButtonGroupContext = createContext<ButtonGroupContext | null>(null)

export { ButtonGroupContext };