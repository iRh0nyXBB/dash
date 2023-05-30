# Isso aqui é um sript para um projeto que estou fazendo
# Vou deixar pra você ver apenas, mas não se preocupe com isso
# 
# 

echo ""
echo "Deploy - Sistema iniciado!"
echo ""

# Declaração de variável
projeto=dashboards
# Uma pasta dentro do wsl
# Vamos instalar isso depois
local_frontend=/opt/projetos/dash/dashboards

#
# Execução da build do frontend
#

echo ""
echo "Frontend - [1/2] Preparando o build"
echo ""

# Vai até a pasta definida na variável
cd $local_frontend

ng build --configuration production

echo ""
echo "Frontend - [2/2] Comprimindo arquivos do dist"
echo ""

# Verifica se o arquivo existe, se sim, exclui ele!
if [ -f "/mnt/c/treinamento/angular/$projeto.app" ]; then
    rm "/mnt/c/treinamento/angular/$projeto.app"
    echo "Arquivo removido com sucesso."
fi

cd $local_frontend/dist
zip -r $projeto.zip $projeto
mv $projeto.zip $projeto.app
mv ./dashboards.app /mnt/c/treinamento/angular

echo ""
echo "Deploy - Sistema finalizado!"
echo ""
