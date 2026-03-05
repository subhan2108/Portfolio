import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ContactModal } from '../components/ui/contact-modal';

interface ModalContextType {
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isContactOpen,
                openContact: () => setIsContactOpen(true),
                closeContact: () => setIsContactOpen(false)
            }}
        >
            {children}
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
