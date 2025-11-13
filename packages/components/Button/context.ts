import { createContext } from 'react';
import type { ButtonGroupContext as ButtonGroupContextType } from './types.buttonGroup';

const ButtonGroupContext = createContext<ButtonGroupContextType | null>(null)

export { ButtonGroupContext };