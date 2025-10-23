const Hobbies = () => {
  const hobbies = [
    {id: 1, title: "Volleyball", image: "https://images.volleyballworld.com/image/upload/t_editorial_landscape_12_desktop_2x/f_auto/fivb-prd/qsq3ixpmqi9au6incq1a.jpg"},
    {id: 2, title: "Videogames", image: "https://media.wired.com/photos/62feb60bcea7c0581e825cb0/3:2/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"},
    {id: 3, title: "Gym", image: "https://andorwillow.com/cdn/shop/articles/vertical_wood_slat_wall_in_home_gym_with_hardwood_floors.jpg?v=1639544722"},
    {id: 4, title: "Cooking", image: "https://cdn.shopify.com/s/files/1/0445/1365/6985/files/elements-of-cooking-flavor-profiling.jpg?v=1638211100"}
  ];

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">My Hobbies</h2>
      <div className="flex overflow-x-auto space-x-4 justify-start">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="p-3 border border-gray-300 rounded w-60 flex-shrink-0"
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full h-40 rounded mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold">{hobby.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
