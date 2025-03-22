import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/theme-provider'

import './globals.css'



export const metadata: Metadata = {
    title: 'Notes',
    description: 'This is a notes app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
