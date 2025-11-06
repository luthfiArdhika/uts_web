window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('body#bd img');
    const basket = document.getElementById('basket');
    const basketStat = document.getElementById('basketstat');
    const textPara = document.getElementById('text1');
    const chTextBtn = document.getElementById('chtext');
    const bcColBtn = document.getElementById('bccol');
    const form = document.querySelector('form') || document.body;
    let basketCount = 0;

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            basketCount++;
            updateBasketText();
            const thumb = img.cloneNode(true);
            thumb.removeAttribute('id');
            thumb.style.width = '60px';
            thumb.style.height = 'auto';
            thumb.style.margin = '4px';
            basket.appendChild(thumb);
        });
        img.addEventListener('mouseover', () => img.style.opacity = '0.85');
        img.addEventListener('mouseout', () => img.style.opacity = '1');
    });

    function updateBasketText() {
        basketStat.textContent = `The flower basket currently contains ${basketCount} ${basketCount === 1 ? 'flower' : 'flowers'}.`;
    }

    function ensureColorControls() {
        const container = document.createElement('div');
        container.style.marginTop = '8px';
        container.style.display = 'flex';
        container.style.gap = '12px';
        container.style.alignItems = 'center';

        const bgLabel = document.createElement('label');
        bgLabel.textContent = 'Background color: ';
        bgLabel.htmlFor = 'bg-color-picker';
        const bgInput = document.createElement('input');
        bgInput.type = 'color';
        bgInput.id = 'bg-color-picker';
        bgInput.title = 'Choose background color';
        bgInput.value = colorToHex(getComputedStyle(document.body).backgroundColor || 'rgb(255,255,255)');
        bgInput.addEventListener('input', e => document.body.style.backgroundColor = e.target.value);

        const textLabel = document.createElement('label');
        textLabel.textContent = 'Text color: ';
        textLabel.htmlFor = 'text-color-picker';
        const textInput = document.createElement('input');
        textInput.type = 'color';
        textInput.id = 'text-color-picker';
        textInput.title = 'Choose text color';
        textInput.value = colorToHex(getComputedStyle(textPara).color || 'rgb(43,43,43)');
        textInput.addEventListener('input', e => textPara.style.color = e.target.value);

        bgLabel.appendChild(bgInput);
        textLabel.appendChild(textInput);
        container.appendChild(bgLabel);
        container.appendChild(textLabel);
        form.appendChild(container);
    }

    ensureColorControls();

    function createCenteredPrompt() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.45)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        const modal = document.createElement('div');
        modal.style.minWidth = '320px';
        modal.style.maxWidth = '90%';
        modal.style.background = '#fff';
        modal.style.borderRadius = '6px';
        modal.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
        modal.style.padding = '14px';
        modal.style.fontFamily = 'system-ui, sans-serif';

        const title = document.createElement('div');
        title.style.fontWeight = '600';
        title.style.marginBottom = '8px';
        title.textContent = 'Input a color (name or hex)';

        const messageEl = document.createElement('div');
        messageEl.style.marginBottom = '8px';
        messageEl.style.color = '#333';

        const input = document.createElement('input');
        input.type = 'text';
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';
        input.style.padding = '8px';
        input.style.marginBottom = '10px';
        input.placeholder = 'e.g. yellow or #ffff00';

        const btnRow = document.createElement('div');
        btnRow.style.display = 'flex';
        btnRow.style.justifyContent = 'flex-end';
        btnRow.style.gap = '8px';

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.style.padding = '6px 10px';

        const okBtn = document.createElement('button');
        okBtn.type = 'button';
        okBtn.textContent = 'OK';
        okBtn.style.padding = '6px 10px';
        okBtn.style.background = '#0078d4';
        okBtn.style.color = '#fff';
        okBtn.style.border = 'none';
        okBtn.style.borderRadius = '4px';

        btnRow.appendChild(cancelBtn);
        btnRow.appendChild(okBtn);

        modal.appendChild(title);
        modal.appendChild(messageEl);
        modal.appendChild(input);
        modal.appendChild(btnRow);
        overlay.appendChild(modal);

        function keyHandler(e) {
            if (e.key === 'Escape') {
                cleanup();
                resolvePromise(null);
            } else if (e.key === 'Enter') {
                cleanup();
                resolvePromise(input.value);
            }
        }

        let resolvePromise;
        function cleanup() {
            document.removeEventListener('keydown', keyHandler);
            if (overlay.parentElement) overlay.parentElement.removeChild(overlay);
        }

        cancelBtn.addEventListener('click', () => {
            cleanup();
            resolvePromise(null);
        });
        okBtn.addEventListener('click', () => {
            cleanup();
            resolvePromise(input.value);
        });

        document.addEventListener('keydown', keyHandler);

        return {
            attachToBody: () => { document.body.appendChild(overlay); input.focus(); },
            setMessage: (msg) => { messageEl.textContent = msg; },
            setValue: (v) => { input.value = v; input.select(); },
            waitForResult: () => new Promise((res) => { resolvePromise = res; })
        };
    }

    async function showCenteredPrompt(message, defaultValue) {
        const dlg = createCenteredPrompt();
        dlg.setMessage(message || '');
        if (defaultValue) dlg.setValue(defaultValue);
        dlg.attachToBody();
        const result = await dlg.waitForResult();
        return result;
    }

    chTextBtn.addEventListener('click', async () => {
        const user = await showCenteredPrompt('Input your text color (name or hex, e.g. "red" or "#ff0000"):', '');
        if (user === null) return;
        const candidate = normalizeColor(user);
        if (!isValidColor(candidate)) {
            alert('Invalid color. Please enter a valid color name or hex code.');
            return;
        }
        textPara.style.color = candidate;
        const picker = document.getElementById('text-color-picker');
        if (picker) picker.value = colorToHex(candidate);
    });

    bcColBtn.addEventListener('click', async () => {
        const user = await showCenteredPrompt('Input your background color (name or hex, e.g. "yellow" or "#ffff00"):', '');
        if (user === null) return;
        const candidate = normalizeColor(user);
        if (!isValidColor(candidate)) {
            alert('Invalid color. Please enter a valid color name or hex code.');
            return;
        }
        document.body.style.backgroundColor = candidate;
        const picker = document.getElementById('bg-color-picker');
        if (picker) picker.value = colorToHex(candidate);
    });

    function isValidColor(str) {
        const s = new Option().style;
        s.color = '';
        s.color = str;
        return s.color !== '';
    }

    function normalizeColor(input) {
        if (!input) return '';
        let v = input.trim();
        if (/^[0-9A-Fa-f]{3}$/.test(v)) v = '#' + v.split('').map(c => c + c).join('');
        else if (/^[0-9A-Fa-f]{6}$/.test(v)) v = '#' + v;
        return v;
    }

    function colorToHex(color) {
        if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color)) {
            if (color.length === 4) {
                return ('#' + color.slice(1).split('').map(c => c + c).join('')).toLowerCase();
            }
            return color.toLowerCase();
        }
        const temp = document.createElement('div');
        temp.style.display = 'none';
        temp.style.color = color;
        document.body.appendChild(temp);
        const cs = getComputedStyle(temp).color;
        document.body.removeChild(temp);
        const m = cs.match(/\d+/g);
        if (!m) return '#ffffff';
        return '#' + m.slice(0,3).map(n => Number(n).toString(16).padStart(2,'0')).join('');
    }
});