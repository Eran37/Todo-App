class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        tasks: 'https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks'
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        tasks : 'http://localhost:8080/api/tasks/'
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;