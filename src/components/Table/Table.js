import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { jogador } from "../../services/api";
import axios from "axios";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField id="search" type="text" value={filterText} onChange={onFilter} />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const columns = [
  {
    name: "Nome",
    selector: "nome",
    sortable: true,
  },
  {
    name: "Nickname",
    selector: "nickname",
    sortable: true,
  },
  {
    name: "Sensibilidade",
    selector: "sensibilidade",
    sortable: true,
  },
  {
    name: "DPI",
    selector: "dpi",
    sortable: true,
  },
  {
    name: "Função",
    selector: "jogador_bt_funcao.funcao",
    sortable: true,
  },
  {
    name: "Mapa preferido",
    selector: "jogador_bt_mapa.mapa",
    sortable: true,
  },
  {
    name: "Resolução",
    selector: "jogador_bt_resolucao.resolucao",
    sortable: true,
  },
];

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    //how to create a async function inside the hook useEffect
    (async () => {
      const response = await axios.get(jogador);
      setJogadores(response.data);
    })();
  }, [jogadores]);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems = jogadores.filter((item) =>
    item.nome.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const isBrowser = typeof window !== "undefined";

  return isBrowser ? (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead
    />
  ) : null;
};

export default Table;
