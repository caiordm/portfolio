import puppeteer from "puppeteer";

const projects = [
    { name: "libertah", url: "https://www.libertah.site/" },
    { name: "encurtador", url: "https://encurtador-front.vercel.app" },
    { name: "campusvirtual", url: "https://campusvirtualfront.vercel.app/" },
    { name: "minitwi", url: "https://twitter-production-12f4.up.railway.app/" },
];

(async () => {
    const browser = await puppeteer.launch();

    for (const project of projects) {
        const page = await browser.newPage();
        await page.goto(project.url);
        await page.setViewport({ width: 1250, height: 800 });
        await page.setDefaultNavigationTimeout(2000)
        await page.screenshot({ path: `../../images/${project.name}.png` });
        await page.close();
    }
    await browser.close();
})();
