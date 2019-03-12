export default function Func(t, M0, eps, mu, K, S) {
    return M0*Math.exp((mu*S/(K+S)-eps)*t);
}