/**
 * @file   mofron-comp-checklist/index.js
 * @brief checkbox list component for mofron
 * @author simpart
 */
const mf = require("mofron");
const FormItem = require("mofron-comp-formitem");
const CheckBox = require("mofron-comp-checkbox");

mf.comp.CheckList = class extends FormItem {
    
    /**
     * constructor
     * 
     * @param (string) 'text' parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("CheckList");
            this.prmMap("text");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set focus status
     *
     * @type private 
     */
    afterRender () {}
    
    /**
     * set chenge event
     *
     * @type private 
     */
    beforeRender () {
        try {
            super.beforeRender();
            let evt = this.changeEvent();
            for (let eidx in evt) {
                let chk_lst = this.getCheckBox();
                for (let cidx in chk_lst) {
                    chk_lst[cidx].changeEvent(evt[eidx][0], evt[eidx][1]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * get check box component
     *
     * @param (number) index: get index check box
     *                 undefined: get all check box
     * @type private
     */
    getCheckBox (idx) {
        try {
            let chd = this.child();
            if (undefined === idx) {
                let ret = [];
                for (let cidx in chd) {
                    if (true === mf.func.isInclude(chd[cidx], "CheckBox")) {
                        ret.push(chd[cidx]);
                    }
                }
                return ret;
            }
            return (undefined !== chd[cidx]) ? chd[cidx] : null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box text list
     *
     * @param (string/mofron-comp-text/array) checkbox text contents
     * @return checkbox text contents list
     * @type tag parameter
     */
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                let chk_lst = this.getCheckBox();
                let ret     = [];
                for (let cidx in chk_lst) {
                    ret.push(chk_lst[cidx].text());
                }
                return ret;
            }
            if (true === Array.isArray(prm)) {
                for (let pidx in prm) {
                    this.text(prm[pidx]);
                }
                return;
            }
            this.child(new CheckBox(prm));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) true: check
     *                  false: uncheck
     * @param (number) check target index
     * @return (array) check status
     * @type tag parameter
     */
    check (flg, idx) {
        try {
            let chk_lst = this.getCheckBox();
            if ("number" === typeof idx) {
                if (undefined === chk_lst[idx]) {
                    throw new Error("invalid index : " + idx);
                }
                return (undefined === flg) ? chk_lst[idx].check() : chk_lst[idx].check(flg);
            }
            let ret     = [];
            for (let cidx in chk_lst) {
                ret.push(chk_lst[cidx].check(flg));
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) the same as 'check' parameter
     * @param (number) the same as 'check' parameter
     * @return (array) check status
     * @type tag parameter
     */
    value (prm, idx) {
        try { return this.check(prm, idx); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus check box
     *
     * @param (boolean) true: focus target check box
     *                  false: defocus target check box
     * @param (number) target index
     * @return focus status of target index
     * @type private
     */
    focus (prm, idx) {
        try {
            let chk = this.getCheckBox(idx);
            if ((null === chk) || (true === Array.isArray(chk))) {
                throw new Error("invalid index : " + idx);
            }
            return chk[idx].focus(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box enable/disable status
     * 
     * @param (boolean) true: change enable mode (default)
     *                  false: change disable mode
     * @param (number/null) target index / get all status
     * @return (boolean) current item status
     * @type tag parameter
     */
    status (prm, idx) {
        try {
            let chk_lst = this.getCheckBox();
            if ("number" === typeof idx) {
                if (undefined === chk_lst[idx]) {
                    throw new Error("invalid index : " + idx);
                }
                return (undefined === flg) ? chk_lst[idx].status() : chk_lst[idx].status(flg);
            }
            let ret     = [];
            for (let cidx in chk_lst) {
                ret.push(chk_lst[cidx].status(flg));
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * uncheck all check box
     *
     * @type function
     */
    clear () {
        try { this.check(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.CheckList;
/* end of file */
