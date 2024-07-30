
export default function Home() {
  const token = sessionStorage.getItem("jwt");
  return (
      <div class="flex flex-col p-8">
            <p>{token}</p>
          <a href="/logout">Logout</a>
      </div>
  );
}

