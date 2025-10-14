export default function ContentLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen px-10 sm:px-30 py-30">
            {children}
        </main>
    );
}
