export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white p-10 mt-20 text-center text-sm">
        {Array.from({ length: 7 }).map((_, i) => (
          <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tortor...</p>
        ))}
      </footer>
    );
  }
  