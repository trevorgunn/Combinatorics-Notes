/* Copyright © 2024, Trevor Gunn
   SPDX-License-Identifier: GPL-3.0-or-later */
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randsigned(max) {
    return (Math.random() < 0.5 ? -1 : 1) * randint(1, max);
}
function geo(a, r) {
    const abs_r = Math.abs(r);
    const r_text = (r < 0 ? "+" : "-") + (abs_r == 1 ? "" : abs_r);
    return (a < 0 ? "-" : "") + "\\frac{" + Math.abs(a) + "}{1" + r_text + "x}";
}
//# sourceMappingURL=ogf.js.map