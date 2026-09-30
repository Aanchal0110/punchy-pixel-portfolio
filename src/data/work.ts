// Paths to files in public/work and public/spec (compressed from the original Work / Spec Ads folders).

const files = (slug: string, names: string[]) => names.map((name) => `/work/${slug}/${name}`);

export const workMedia = {
  amex: files("amex", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"]),
  natgeo: files("natgeo", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]),
  ebco: files("ebco", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]),
  ihcl: files("ihcl", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg"]),
  kss: files("kss", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.mp4", "08.mp4", "09.mp4"]),
  lyke: files("lyke", ["01.jpg", "02.jpg"]),
  skybags: files("skybags", ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg"]),
  sukhin: files("sukhin", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]),
  transunion: files("transunion", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg"]),
  vyoma: files("vyoma", ["05.jpg", "06.jpg", "07.jpg", "08.jpg", "01.mp4", "02.mp4", "03.mp4", "04.mp4"]),
  yolo: files("yolo", ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]),
};

export const specAds = ["09.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"].map((name) => `/spec/${name}`);
