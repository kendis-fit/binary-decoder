const translator = (code: string) => {
  if (!/^(0|1|\s)+$/.test(code)) throw new Error("The code isn't binary");
  let output = '';
  const binaryCodes = code.trim().split(' ').filter(Boolean);
  for (let i = 0; i < binaryCodes.length; ++i) {
    output += String.fromCharCode(parseInt(binaryCodes[i], 2));
  }
  return output;
};

export default translator;

