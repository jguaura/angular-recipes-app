/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#E5EFFE',
          200: '#C0D8FC',
          300: '#81B2F9',
          400: '#0464F3',
          500: '#034BB6',
          600: '#02327A'
        },
        customColor: '#6D59D2',
        green: {
          100: '#F5FCF5',
          200: '#EBF9EB',
          300: '#CEEFCE',
          400: '#9DE09D',
          500: '#3CC13B',
          600: '#2D912C'
        },
        grey: {
          100: '#FBFCFC',
          200: '#F7F8FA',
          300: '#ECEEF2',
          400: '#D9DDE4',
          500: '#B3BAC9',
          600: '#868B97',
          700: '#595D65',
          800: '#2D2E32'
        },
        pink: {
          100: '#FFE5F3',
          200: '#FFBFE1',
          300: '#FE80C3',
          400: '#FD0087',
          500: '#BE0065',
          600: '#7F0043',
          700: '#3F0022'
        },
        red: {
          100: '#FEF5F5',
          200: '#FDEBEB',
          300: '#FBCDCD',
          400: '#F89B9B',
          500: '#F03738',
          600: '#B4292A'
        },
        yellow: {
          100: '#FEFCF4',
          200: '#FEF8E8',
          300: '#FCEEC6',
          400: '#F9DD8D',
          500: '#F3BB1C',
          600: '#B68C15'
        }
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins']
      }
    }
  },
  plugins: []
};
