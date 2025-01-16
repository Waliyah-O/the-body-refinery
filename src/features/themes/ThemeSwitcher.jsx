function ThemeSwitcher() {
    return (
      <select className="select select-bordered" data-choose-theme>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="emerald">Emerald</option>
      </select>
    );
  }