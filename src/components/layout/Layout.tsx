import { Navbar } from './Navbar';
import { Footer } from './Footer';
import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
